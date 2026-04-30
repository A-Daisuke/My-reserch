const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({
            KEY_1: `my-id-${VAR_2}`,
            KEY_2: "My name",
            KEY_3: "Some name",
            KEY_4: "http://www.test.com",
            KEY_5: "2019-01-01 00:00:00",
          });
        }
        VAR_1.reduce((VAR_4, VAR_5) => {
          VAR_4[VAR_5.KEY_1] = VAR_5;
          return VAR_4;
        }, {});
    }
};