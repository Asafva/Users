abstract class Globals {

}

class DevelopmentGlobals extends Globals {
    public usersUrl = "https://randomuser.me/api/?results=100";
}

class ProductionGlobals extends Globals {
    public usersUrl = "https://randomuser.me/api/?results=100";
}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;