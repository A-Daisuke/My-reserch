const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1.push({
            KEY_1: "test",
            KEY_2: function () {
              alert("woof");
            },
          });
        }
    }
};