// Web Audio API Synthesizer - No external audio files needed

let audioCtx: AudioContext | null = null;
let isSoundMuted = false;

export const setSoundMuted = (muted: boolean) => {
  isSoundMuted = muted;
  try {
    localStorage.setItem('glowsync_sound_muted', muted ? 'true' : 'false');
  } catch (e) {
    console.error(e);
  }
};

export const getSoundMuted = (): boolean => {
  try {
    const val = localStorage.getItem('glowsync_sound_muted');
    return val === 'true';
  } catch {
    return false;
  }
};

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// Play a pleasant waterdrop / crystal ding for completing a skincare step
export const playCheckInSound = () => {
  if (getSoundMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    
    // Two harmonic notes (E6 -> B6)
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(1318.51, now); // E6
    osc.frequency.exponentialRampToValueAtTime(1975.53, now + 0.08); // B6

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  } catch (e) {
    console.warn('Audio play error', e);
  }
};

// Play a tranquil double chime when a timer completes (e.g. 15min mask or 3min BHA)
export const playTimerFinishChime = () => {
  if (getSoundMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const notes = [587.33, 880, 1174.66]; // D5, A5, D6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const start = ctx.currentTime + idx * 0.14;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.18, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + 0.8);
    });
  } catch (e) {
    console.warn('Timer chime error', e);
  }
};

// Play celebration fan-fare when all tasks of the day are 100% completed!
export const playAllCompleteChime = () => {
  if (getSoundMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const chord = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const start = ctx.currentTime + idx * 0.12;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.15, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + 0.7);
    });
  } catch (e) {
    console.warn('Celebration chime error', e);
  }
};
