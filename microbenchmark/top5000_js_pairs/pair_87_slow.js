const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 8];
        var VAR_2 = [3, 2, 8, 5];
        var VAR_3 = ["Jane", "Kenny", "Thomas", "Kelvin"];
        var VAR_4 = ["Arron", "Jane", "Kelvin", "Nick"];
        var FUNCTION_1 = (VAR_5, VAR_6) =>
          VAR_1.filter((VAR_7) => VAR_2.indexOf(VAR_7) != -1).length;
        for (var VAR_8 = 0; VAR_8 < 300000; VAR_8++) {
          FUNCTION_1(VAR_1, VAR_2);
          FUNCTION_1(VAR_3, VAR_4);
        }
    }
};