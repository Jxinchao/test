<template>
  <div class="grid">
    <h1>水平排列的布局。col必须放在row里面。 24格</h1>
    <Row>
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <h1>通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。</h1>
    <Row :gutter="16">
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .grid
    with:200px
    .ivu-row
      height:30px
      .ivu-col
        with:100px;
        height:30px;
        background:yellow;
</style>
