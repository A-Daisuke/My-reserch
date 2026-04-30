const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "lsh" };
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          VAR_2 = ["&", "|", "^", ">>", ">>>", "<<"][
            ["and", "or", "xor", "rsh", "ursh", "lsh"].indexOf(VAR_1.KEY_1)
          ];
        }
    }
};