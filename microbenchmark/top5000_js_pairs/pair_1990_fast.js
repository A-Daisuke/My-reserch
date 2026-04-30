const Benchmark = {
    run: function() {
        var VAR_1 = new Array(200).join("a");
        while (VAR_1) VAR_1 = VAR_1.slice(1);
    }
};