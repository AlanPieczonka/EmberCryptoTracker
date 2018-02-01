import $ from 'jquery';

export const changeSelect = (url) => {
  const start = url.lastIndexOf('/') + 1,
        end = url.length,
        option = url.slice(start, end);

  $('#mySelect option').each(function() {
    $(this).val() == option && $(this).prop('selected', true)
  })
}

export const resetSelect = () => {
  $('#mySelect option').prop('selected', function(){
    return this.defaultSelected;
  });
}