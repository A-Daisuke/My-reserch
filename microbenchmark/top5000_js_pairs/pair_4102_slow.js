const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        var VAR_3 = VAR_2;
        while (VAR_3--) VAR_1.push(VAR_3);
        var VAR_4 = VAR_1.join("");
    }
};