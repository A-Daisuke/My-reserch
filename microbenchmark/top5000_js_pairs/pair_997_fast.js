const Benchmark = {
    run: function() {
        var VAR_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var VAR_2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        var VAR_3 = [];
        var VAR_4 = 10000;
        var VAR_5 = 0;
        for (; VAR_5 < VAR_4; VAR_5 += 1) {
          VAR_3 = [...VAR_1, ...VAR_2];
        }
    }
};