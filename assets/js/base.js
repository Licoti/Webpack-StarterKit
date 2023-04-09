const debug = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'none';

export function initHome () {
  const Base = {
    init: function () {
      if (debug) console.log('Base-init');

    }
  };

  Base.init();
}