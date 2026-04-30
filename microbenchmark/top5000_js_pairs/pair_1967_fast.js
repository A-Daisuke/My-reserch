const Benchmark = {
    run: function() {
        var VAR_1 = new Array(300).join("a");
        while (VAR_1) VAR_1 = VAR_1.substr(1);
    }
};