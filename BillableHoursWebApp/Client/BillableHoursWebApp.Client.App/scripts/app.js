var pubnub = PUBNUB({
    subscribe_key: constants.Pubnub.SKEY,
    publish_key: constants.Pubnub.PKEY
});

(function () {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    var sammyApp = Sammy('#content', function () {
        this.get('#/users/login', usersController.login);
        this.get('#/users/register', usersController.register);
        this.get('#/users/logout', usersController.logout);

        this.get('#/', homeController.all);
        this.get('#/home', homeController.all);

        this.get('#/projects', projectsController.all);
        this.get('#/projects/add', projectsController.add);
        this.get('#/projects/:id', projectsController.getById);
        this.get('#/projects/category/:id', projectsController.getByCategory);

        this.get('#/users/projects', userProjectsController.all);
        this.get('#/users/projects/:id', userProjectsController.getById);
        this.get('#/users/projects/add/:id', userProjectsController.begin);

        this.notFound = function () {
            location.assign('#/');
        }
    });

    $(function () {
        ////
        // check if a user is logged in, hide/show buttons depending on that
        ////
        if (!localStorage.getItem(constants.localStorage.LOCAL_STORAGE_TOKEN)
            || !localStorage.getItem(constants.localStorage.LOCAL_STORAGE_USERNAME)
            || !localStorage.getItem(constants.localStorage.LOCAL_STORAGE_ROLE)) {

            $('#btn-nav-logout').hide();
            $('#btn-nav-myprojects').hide();
            $('#btn-nav-addproject').hide();
        } else {
            if (localStorage.getItem(constants.localStorage.LOCAL_STORAGE_ROLE) === "1") {
                $('#btn-nav-addproject').hide();
            }

            $('#btn-nav-login').hide();
            $('#btn-nav-register').hide();
            $('#href-nav-name').text('Hello, ' + localStorage.getItem(constants.localStorage.LOCAL_STORAGE_USERNAME));
        }

        sammyApp.run('#/');
    });
}());
