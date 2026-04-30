const Benchmark = {
    run: function() {
        this.VAR_1 = [];
        this.VAR_2 = {};
        for (var VAR_3 = 0; VAR_3 < 1000; ++VAR_3) {
          this.VAR_1.push({ KEY_1: 0 });
          this.VAR_2["key" + VAR_3] = { KEY_2: 0 };
        }
        for (var VAR_4 in this.VAR_2) {
          this.VAR_2[VAR_4].KEY_1++;
        }
    }
};