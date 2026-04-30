const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "lsh" };
        var VAR_2;
        var VAR_3 = {
          KEY_2: "&",
          KEY_3: "|",
          KEY_4: "^",
          KEY_5: ">>",
          KEY_6: ">>>",
          KEY_7: "<<",
        };
        for (var VAR_4 = 0; VAR_4 < 1000000; VAR_4++) {
          VAR_2 = ["&", "|", "^", ">>", ">>>", "<<"][
            ["and", "or", "xor", "rsh", "ursh", "lsh"].indexOf(VAR_1.KEY_1)
          ];
        }
    }
};