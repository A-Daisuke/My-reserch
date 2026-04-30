const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        for (VAR_3 = 0; VAR_3 < 2000; VAR_3++) {
          VAR_2.push(VAR_1.slice(0));
        }
        Object.defineProperty(Array.prototype, "clear", {
          KEY_1: false,
          KEY_2: false,
          KEY_3: true,
          KEY_4: function () {
            for (var VAR_4 = this.VAR_5 - 1; VAR_3 >= 0; VAR_3--) {
              delete this[VAR_3];
            }
            this.VAR_5 = 0;
          },
        });
        for (VAR_3 = 0; VAR_3 < 2000; VAR_3++) {
          VAR_2[VAR_3].splice(0, VAR_2[VAR_3].VAR_5);
        }
    }
};