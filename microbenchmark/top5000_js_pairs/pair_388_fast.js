const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = [];
        while (VAR_2 < 1000) {
          VAR_1.push({ KEY_1: "test_" + Math.random() });
          VAR_2++;
        }
        VAR_2 = 0;
        while (VAR_2 < 1000) {
          VAR_3.push(VAR_1[VAR_2]);
          VAR_2++;
        }
    }
};