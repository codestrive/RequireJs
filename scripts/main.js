requirejs.config({
    paths: {
        "jquery": "jquery-1.11.0.min",
        "bootstrap": "bootstrap.min",
        "bootbox": "bootbox.min"
        /*You can specify path like this also
            "bootbox": "//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.min"
        */
    },
    shim: {
        "bootstrap": ["jquery"],
        "bootbox": ["jquery","bootstrap"]
    }
});

require(["skillstack", "skillchange"], function(skillstack, skillchange){
    skillstack.skillstate();
    skillchange.eventListener();
});