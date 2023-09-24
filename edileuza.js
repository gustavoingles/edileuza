const userList = {
    siteUserList : [],
    masterUserList : []    
}

class User {
    constructor(username, keyword, id) {
        this._username = username;
        this._keyword = keyword;
        this._id = id;
    }

    // Getters e setters dos atributos dessa classe 

    get username() {
        return this.username;
    }

    set username(username) {
        this.username = username;
    }

    get keyword() {
        return this.keyword;
    }

    set keyword(keyword) {
        this.keyword = keyword;
    }

    // Métodos da classe

    login(usernameAttempt, keywordAttempt) {
        if (usernameAttempt == this.username() && this.keyword() == keywordAttempt) {
            console.log("Login efetuado com sucesso!");
        }
        else {
            if (usernameAttempt != this.username()) {
                console.log("Nome de usuário incorreto");
            }
            else if (keywordAttempt != this.keyword()) {
                console.log("Senha incorreta");
            }
            else {
                console.log("Nome de usuário e senha incorretos");
            }
        }
    }
    
    logout() {
        console.log("Você saiu da sua conta");
    }

    static signUp(chosenUsername, chosenKeyword) {
        const newUser = new User(chosenUsername, chosenKeyword);
        userList.siteUserList += newUser
    }

}

class MasterUser extends User {
    constructor(username, keyword, id, adminPermissions) {
        // Método super resgatando os atributos e métodos da super-classe
        super(username, keyword, id);
        this.adminPermissions = adminPermissions;
    }

    // Getters e Setters dos atributos novos da classe

    get adminPermissions() {
        return this.adminPermissions;
    }

    set adminPermissions(adminPermissions) {
        this.adminPermissions = adminPermissions;
    }

    /*

    Protótipo de método de remoção de usuário
    removeUser(user) {
        const siteUserList = userList.siteUserList;
        const index = siteUserList.findIndex(u => (u.id) === user.id);

        if (index !== -1) {
            siteUserList.splice(index, 1);
            console.log(`Usuário ${userList.siteUserList.User.username()} removido da lista de usuários do site.`);
        }
    }

    */
}