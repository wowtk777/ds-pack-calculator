
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
}

export default PackageInfo;
