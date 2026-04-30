const Benchmark = {
    run: function() {
        for (let VAR_1 = 0; VAR_1 < 16; ++VAR_1) {
          let VAR_2 = new ArrayBuffer(4);
          let VAR_3 = new Int32Array(VAR_2);
          VAR_3.fill(1);
        }
    }
};