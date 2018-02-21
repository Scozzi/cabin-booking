<template>
  <div class="ui container"> 
    <div class="ui container">
      <v-date-picker
        mode='range'
        v-model='selectedDate'
        show-caps>
      </v-date-picker>
    </div>
    <div class="ui horizontal divider">
      Or
    </div>
    <div class="ui container">
      <div class="">
        <v-date-picker 
          :attributes='attrsCalender'
          :theme-styles='themeStyles'
          :pane-width='panelSize'
          mode='range'
          is-inline>
        </v-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const hSpacing = '20px';
    const vSpacing = '30px';
    const panelSize = 450;
    return {
      panelSize: panelSize,
      selectedDate: {
        start: new Date(2018, 1, 9),
        end: new Date(2018, 1, 18)
      },
      themeStyles: {
        wrapper: {
          background: 'linear-gradient(to top, #deedde, #ffffff)',
          color: '#575757',
          border: '0',
          borderRadius: '5px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 6px 20px 0 rgba(0, 0, 0, 0.13)'
        },
        header: {
          color: '#5c7c5c',
          padding: `${vSpacing} ${hSpacing}`,
        },
        headerHorizontalDivider: {
          borderTop: 'solid rgba(255, 255, 255, 0.2) 1px',
          width: '80%',
        },
        weekdays: {
          padding: `${vSpacing} ${hSpacing} ${vSpacing} ${hSpacing}`,
        },
        weeks: {
          padding: `${vSpacing} ${hSpacing} ${vSpacing} ${hSpacing}`,
        }
      },
      attrsCalender: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#fcfcfc',
            // Other properties are available too, like `height` & `borderRadius`
          },
          // Just use a normal style
          contentStyle: {
           color: '#3f3f3f'
         },
         // Our new popover here
         popover: {
          label: 'You just hovered over today\'s date!'
         },
        dates: [ 
          new Date(2018, 1, 1), 
          new Date(2018, 1, 15),
          { start: new Date(2018, 1, 4), end: new Date(2018, 1, 9) }
          ],
        disabledDates: [
          { start: new Date(2018, 1, 2), end: new Date(2018, 1, 3) },
          { start: new Date(2018, 1, 23), end: new Date(2018, 1, 26) }
        ]
        }
      ]
    };
  },
};
</script>
