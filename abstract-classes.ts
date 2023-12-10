// ! BLUEPRINT
abstract class takePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {
        
    }

    abstract getSepia(): void
}

// ! We can't use an abstract class to create a object because this is BLUEPRINT
// const dogu = new takePhoto("Self","Gray")


class InstagramforAbstract extends takePhoto {
    getSepia(): void {
        console.log("Helloooo");
        
    }
}

const dogu = new InstagramforAbstract("Self","Gray")