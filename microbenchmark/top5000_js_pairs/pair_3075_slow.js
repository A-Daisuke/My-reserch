const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1900;
        var VAR_3 = 3000 - VAR_2;
        do {
          VAR_1.splice(VAR_1.length, 0, VAR_2++);
        } while (3000 - VAR_2);
    }
};