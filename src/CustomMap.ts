export class CustomMap {
  // public aMap: AMap.Map;

  // 私有属性，让外部不能直接调用地图相关的API，让功能聚合在自定义的地图类内部
  private aMap: AMap.Map;

  constructor(divId: string) {
    this.aMap = new AMap.Map(
      document.getElementById(divId)!, 
      {
        viewMode: '2D', //默认使用 2D 模式
        zoom: 11, //地图级别
        center: [116.397428, 39.90923], //地图中心点
      }
    );
  }
}