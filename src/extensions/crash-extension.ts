export class CrashExtension {
  public generateCrashPoint(): number {
    const e: number = 2 ** 32;
    const [h] = crypto.getRandomValues(new Uint32Array(1));
    const crashPoint: number = Math.floor((100 * e - h) / (e - h)) / 100;

    return crashPoint;
  }
}

export const crashExtension = new CrashExtension();
