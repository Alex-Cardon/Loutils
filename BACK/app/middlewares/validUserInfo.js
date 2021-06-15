module.exports = function (req, res, next) {
    const {
        email,
        name,
        password
    } = req.body;
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PASSWORD_REGEX = /^(?=.*\d).{8,30}$/;

    function validEmail(email) {
        return EMAIL_REGEX.test(email);
    }

    function validPassword(password) {
        return PASSWORD_REGEX.test(password);
    }

    if (req.path === "/register") {
        if (![email, name, password].every(Boolean)) {
            return res.status(401).json("Information(s) manquante(s)");
        }
        if (name.length >= 10 || name.length <= 3) {
            return res.status(400).json({
                'error': 'Le pseudo est non valide (il doit avoir au minimum 3 et au maximum 10 caractères)'
            });
        }
        if (!validEmail(email)) {
            return res.json("Email non valide");
        }
        if (!validPassword(password)) {
            return res.json("Mot de pass non valide (il doit comprendre entre 8 et 30 caractères et contenir au moins un chiffre)");
        }

    } else if (req.path === "/login") {

        if (![email, password].every(Boolean)) {
            return res.json("Information(s) manquante(s)");

        }
        if (!validEmail(email)) {
            return res.json("Email non valide");

        }
        if (!validPassword(password)) {
            return res.json("Mot de pass non valide (il doit comprendre entre 8 et 30 caractères et contenir au moins un chiffre)");
        }
    }

    next();
};