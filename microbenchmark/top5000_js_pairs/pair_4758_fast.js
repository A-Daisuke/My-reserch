const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyz";
        var VAR_2 = VAR_1[Math.floor(Math.random() * 26)];
        var VAR_5 = new RegExp("(" + VAR_2 + "$)");
        VAR_5.exec(VAR_1);
    }
};