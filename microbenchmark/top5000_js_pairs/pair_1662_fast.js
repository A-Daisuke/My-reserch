const Benchmark = {
    run: function() {
        var VAR_1 = "blahblahblah," + new Array(1000000).join("x");
        var VAR_2 = /^.+?,/;
        VAR_1.slice(VAR_1.indexOf(","));
    }
};