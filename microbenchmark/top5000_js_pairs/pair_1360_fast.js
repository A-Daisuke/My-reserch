const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 65535; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * Math.floor(255)));
        }
        const VAR_3 = String.fromCharCode(...VAR_1);
    }
};