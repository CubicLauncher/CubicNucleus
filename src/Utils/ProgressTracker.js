// Utils/ProgressTracker.js

class ProgressTracker {
    constructor() {
        this.progress = {
            version: 0,
            client: 0,
            natives: 0,
            libraries: 0,
            assets: 0
        };
        this.isActive = false;
    }

    updateProgress(component, value) {
        this.progress[component] = value;
        this.printProgress();
    }

    startTracking() {
        this.isActive = true;
        this.printProgress();
    }

    stopTracking() {
        this.isActive = false;
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        console.log('Descarga completada!');
    }

    getOverallProgress() {
        const weights = {
            version: 5,
            client: 25,
            natives: 15,
            libraries: 15,
            assets: 40
        };

        return Object.keys(this.progress).reduce((total, key) => {
            return total + (this.progress[key] * weights[key] / 100);
        }, 0);
    }

    printProgress() {
        if (!this.isActive) return;

        const overallProgress = Math.floor(this.getOverallProgress());
        const barLength = 40;
        const progressBar = '='.repeat(Math.floor(overallProgress * barLength / 100));
        const remainingBar = ' '.repeat(barLength - progressBar.length);

        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(
            `Progreso Total: [${progressBar}${remainingBar}] ${overallProgress}%`
        );
    }
}

// Crear una instancia única
const tracker = new ProgressTracker();

module.exports = tracker;