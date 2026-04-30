const Benchmark = {
    run: function() {
        let VAR_1 = [];
        let VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 100));
        }
        let VAR_5 = Int32Array.from(VAR_1.filter((VAR_6) => VAR_6 != 0));
        let VAR_7 = VAR_1.length - VAR_5.length;
        VAR_5.sort();
        VAR_5.reverse();
        let VAR_8 = new Int32Array(VAR_1.length);
        VAR_8.set(VAR_5, VAR_7);
        let VAR_9 = Array.from(VAR_8);
    }
};