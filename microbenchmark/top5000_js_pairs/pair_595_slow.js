const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "and" };
        var VAR_2;
        var VAR_3 = ["&", "|", "^", ">>", ">>>", "<<"];
        var VAR_4 = ["and", "or", "xor", "rsh", "ursh", "lsh"];
        for (var VAR_5 = 0; VAR_5 < 1000000; VAR_5++) {
          VAR_2 = VAR_3[VAR_4.indexOf(VAR_1.KEY_1)];
        }
    }
};