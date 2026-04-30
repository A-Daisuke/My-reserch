const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          let VAR_3 = [];
          for (let VAR_4 = 0; VAR_4 < 100; VAR_4++) VAR_3.push(VAR_4);
          VAR_1.push(VAR_3);
        }
        let VAR_5 = [].concat(...VAR_1);
    }
};