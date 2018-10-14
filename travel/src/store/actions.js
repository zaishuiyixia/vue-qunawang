export default {
    changeCity (ctx, city) {
        console.log('ctx==>', ctx)
        console.log('city==>', city)
        ctx.commit('changeCity', city)
    } 
}