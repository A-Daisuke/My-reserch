const Benchmark = {
    run: function() {
        const VAR_1 = [{ KEY_1: 1 }, { KEY_2: 2 }, { KEY_3: 3 }, { KEY_4: 1 }, { KEY_5: 1 }, { KEY_6: 3 }];
        const VAR_7 = new Set();
        VAR_1.filter((VAR_2) => {
          if (VAR_7.has(VAR_2.KEY_1)) return false;
          VAR_7.add(VAR_2.KEY_1);
          return true;
        });
    }
};