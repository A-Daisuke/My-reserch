const Benchmark = {
    run: function() {
        var VAR_1 = "blahblahblah," + new Array(1000000).join("x");
        var VAR_2 = /^.+?,/;
        var VAR_3 = /,/;
        VAR_1.replace(VAR_2, ",");
    }
};