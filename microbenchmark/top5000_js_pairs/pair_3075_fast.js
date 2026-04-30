const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1900;
        var VAR_3 = 3000 - VAR_2;
        do {
          VAR_1.push(VAR_2++);
        } while (VAR_1.length < VAR_3);
    }
};