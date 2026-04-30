const Benchmark = {
    run: function() {
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (VAR_1) {
          return new Date(0, VAR_1).toLocaleString("en", { KEY_1: "long" });
        });
    }
};