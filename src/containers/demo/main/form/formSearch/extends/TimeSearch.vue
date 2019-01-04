
<script>

  import NormalSearch from './NormalSearch.vue';
  export default {
    extends : NormalSearch,
    data () {
      return {
        title : '各种时间选择器',
        fields : [
          {
            prop    : 'timeType1',
            type    : 'datePicker',
            label   : '时间1',
            placeholder : '请选择时间',
          },
          {
            prop    : 'timeType2',
            type    : 'datePicker',
            label   : '时间2',
            placeholder : '请选择时间',
            datePickerAttrs : {
              type : 'daterange'
            }
          },
          {
            prop    : 'timeType3',
            type    : 'datePicker',
            label   : '时间3',
            placeholder : '请选择时间',
            datePickerAttrs : {
              type : 'month'
            }
          },
          {
            prop    : 'timeType4',
            type    : 'datePicker',
            label   : '时间4',
            placeholder : '请选择时间',
            datePickerAttrs : {
              type : 'year'
            }
          }
        ],
        formFields : {
          timeType1 : '',
          timeType2 : [],
          timeType3 : '',
          timeType4 : '',
        }
      }
    }
  }
</script>
