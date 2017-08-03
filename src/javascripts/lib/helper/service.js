// @flow

export function loadLocalStorageByKey (key: string): Promise<*> {
  return new Promise(resolve => {
    const serializedSrc = window.localStorage.getItem(key)
    const deserializedSrc = JSON.parse(serializedSrc)
    resolve(deserializedSrc)
  })
}

export function saveLocalStorageByKey (src: any, key: string): Promise<void> {
  return new Promise(resolve => {
    const serializedSrc = JSON.stringify(src)
    window.localStorage.setItem(key, serializedSrc)
    resolve()
  })
}

export function wait (duration: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
