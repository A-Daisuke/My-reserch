const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 500;
        while (VAR_2--) {
          VAR_1 = [
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ",
            "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB ",
            "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
          ].join("");
        }
    }
};