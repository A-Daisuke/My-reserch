const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 255));
        }
        VAR_3 = VAR_1.join(",");
        VAR_4 = "[" + VAR_3 + "]";
        VAR_5 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2 += 4) {
          VAR_5.push({
            KEY_1: VAR_1[VAR_2],
            KEY_2: VAR_1[VAR_2 + 1],
            KEY_3: VAR_1[VAR_2 + 2],
            KEY_4: VAR_1[VAR_2 + 3],
          });
        }
        VAR_6 = JSON.stringify(VAR_5);
        VAR_7 = eval(VAR_6);
    }
};