const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = [];
        var VAR_3 = VAR_1 - 8 - (VAR_1 % 8);
        var VAR_4 = VAR_1;
        while (VAR_2.length < VAR_3) VAR_2.push([], [], [], [], [], [], [], []);
        while (VAR_2.length < VAR_4) VAR_2.push([]);
    }
};