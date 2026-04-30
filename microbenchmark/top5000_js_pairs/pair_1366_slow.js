const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 65535; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * Math.floor(255)));
        }
        let VAR_3 = "";
        for (const VAR_4 of VAR_1) {
          VAR_3 += String.fromCharCode(VAR_4);
        }
    }
};