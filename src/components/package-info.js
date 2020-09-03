
class PackageInfo {
    constructor(size, material) {
        this.size = size
        this.material = material
        this.volumeSize = this.size > 4 ? 6 : this.size;
        this.volumeMarker = '';

        switch (this.volumeSize) {
            case 1:
                this.volumeMarker = 'S'
                break;
            case 2:
                this.volumeMarker = 'M'
                break;
            case 4:
                this.volumeMarker = 'L'
                break;
            case 6:
                this.volumeMarker = 'XL'
                break;
        }

        this.amount = material.smallestAmount * this.size
        this.weight = material.smallestWeight * this.size
    }

    setupCount(resourcesLeft) {
        let count = Math.floor(resourcesLeft / this.amount)
        let deltaAmount = this.amount * count
        let deltaWeight = this.weight * count
        let deltaVolumeSize = this.volumeSize * count

        this.count = count

        return {count, deltaAmount, deltaWeight, deltaVolumeSize}
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
    }

    get key() {
        return this.material.id * 100 + this.size
    }

    aggregate(packageInfo) {
        this.count += packageInfo.count
    }
}

export default PackageInfo;
