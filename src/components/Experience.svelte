<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
    import IntersectionObserver from "svelte-intersection-observer";
    import { fade } from "svelte/transition";

  /**
     * @type {HTMLDivElement}
     */
  let node;

</script>

<!-- Icons from: https://icons8.com/pricing -->
<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div class="min-h-screen flex flex-col justify-center items-center" transition:fade={{ delay: 500 }}>

<h1 class="text-5xl my-10 secondary">Experience</h1>

<Timeline >
    
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="py-4">May 2022 - August 2022</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="https://img.icons8.com/?size=100&id=cYRU7TBWwNVs&format=png&color=000000" alt="Government of Canada" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: auto;'}>
			<h2>Agriculture and Agri-Food Canada</h2>
            <h3>System Administrator</h3>
			<ul>
				<li>Automated software deployment using technology such as Vagrant and Docker</li>
				<li>Constructed client-specific Docker containers, including a Bash script for stress testing machine
                    performance</li>
                <li>Directed and documented an investigation into Gitea, an open-source lightweight alternative to Gitlab, decreasing memory usage by 87.5%.
                </li>
			</ul>a
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="py-4">November 2022 - Present</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="https://www.uocav.ca/_next/image?url=%2Flogo.png&w=96&q=75" alt="UOAV Logo" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: auto;'}>
			<h2>uOttawa Autonomous Vehicle Team</h2>
            <h3>Software Developer</h3>
			<ul>
				<li>Managed the Embedded Software such as the communication between the Xavier and ESP32.</li>
				<li>Wrote C++ ROS2 nodes to interface ROS2_Control with the HDC2460 motor driver.</li>
                <li>Contributed to the autonomous software by incorporating ROS2 SLAM with industry-grade Lidar for mapping and navigation.
                </li>
			</ul>a
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="py-4">January 2023 - April 2023</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="https://img.icons8.com/?size=100&id=cYRU7TBWwNVs&format=png&color=000000" alt="Government of Canada" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: auto;'}>
			<h2>Government of Canada</h2>
            <h3>Full Stack Developer</h3>
            <ul>
			    <li>Collaborated with a team of developers to build a web application from scratch, utilising front-end and back-end technologies VueJS and NodeJS respectively </li>
                <li>Built RESTful APIs to handle data requests and responses, and utilised SQL to store and retrieve data</li>
                <li>Optimized the performance of SQL queries, resulting in an increase in page loading speeds by 29% and a reduction in API response time by 20%.</li>
            </ul>
		</TimelineContent>
	</TimelineItem>
    
</Timeline>
</div>

   {/if}
  </div>
</IntersectionObserver>

<style>


	li, ul, p {
		margin: px 0;
		color: #c5c6c7;
	}


    ul {
        list-style: disc;
    }

    li {

        padding-bottom: 0.75rem;
    }

    h2, h3 {
        color: white;
    }

    

</style>