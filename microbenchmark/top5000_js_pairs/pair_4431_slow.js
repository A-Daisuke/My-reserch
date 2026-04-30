const Benchmark = {
    run: function() {
        const VAR_1 = [...new Array(1000)]
          .fill("hello")
          .reduce((VAR_2, VAR_3) => VAR_2 + `,${VAR_3}`, "");
        VAR_1.split(",").join(", ");
    }
};