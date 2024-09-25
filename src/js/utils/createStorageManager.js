/**
 *
 * @param {Storage} storage
 * @returns
 */
export function createStorageManager(storage) {
  /**
   *
   * @param {string} key
   * @param {any?} fallbackValue
   * @returns
   */
  function get(key, fallbackValue = null) {
    try {
      return storage.getItem(key) || fallbackValue;
    } catch {
      return fallbackValue;
    }
  }

  /**
   *
   * @param {string} key
   * @param {any} value
   * @returns
   */
  function set(key, value) {
    try {
      storage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  return {
    get,
    set,
  };
}
