requirejs([
  'jquery',
  'circularPage',
  'circularPrint'
],
function($, circularPage, circularPrint) {
  $(function() {
    circularPage({
      model: {
        "FacetsApplied":null,
        "CircularId":1011708,
        "Name":"Weekly Ad",
        "StartDate":"2018-09-23T04:00:00+00:00",
        "EndDate":"2018-09-30T04:00:00+00:00",
        "PageNumber":0,
        "Items":"_____60,000+ characters____"
      },
      defaultProductFallbackImageUrl: '//shop.shoprite.com/~/media/d82ea3dc16874a6a86d24f148d9f8029.ashx',
      resources: {
        circularHoverClickforSales: 'Click to Select Item',
        circularHoverAvailibilityDateData: 'Sale Prices Valid {date}',
        circularPreviewPriceText: '{price}'
      }
    }),
    circularPrint({
      links: {
        printCurrentCircularLink: '/store/60EF711/circulars/PrintCircular/1011708/0',
        printWholeCircularLink: '/store/60EF711/circulars/PrintCircular/1011708/99',
        downloadCircularPageModalLink: '/store/60EF711/circulars/DownloadCircularModal/1011708/0',
        printCircularPageModalLink: '/store/60EF711/circulars/PrintCircularModal/1011708/0'
      }
    });
  });
});

$(".circularSpecialNavigation__weeklySpecialsLink").on("click",function(){
    $(".spinnerOverlay").show();
});