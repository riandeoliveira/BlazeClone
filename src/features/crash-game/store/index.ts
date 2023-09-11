import { action, makeAutoObservable, observable } from "mobx";

class CrashGameStore {
  public isCrashed: boolean;
  public isLoading: boolean;
  public limit: number;
  public multiplier: number;

  public constructor() {
    this.isCrashed = false;
    this.isLoading = false;
    this.limit = 0;
    this.multiplier = 1.0;

    makeAutoObservable(this, {
      isCrashed: observable,
      isLoading: observable,
      limit: observable,
      multiplier: observable,

      reset: action,
      setIsCrashed: action,
      setIsLoading: action,
      setLimit: action,
      setMultiplier: action,
    });
  }

  public reset(): void {
    this.setIsCrashed(false);
    this.setIsLoading(false);
    this.setLimit(0);
    this.setMultiplier(1.0);
  }

  public setIsCrashed(isCrashed: boolean): void {
    this.isCrashed = isCrashed;
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
  }
}

export const crashGameStore = new CrashGameStore();
