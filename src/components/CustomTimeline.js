import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import { Box, Typography } from "@mui/material";

import { content } from "../constants/content";
import { colors } from "../constants/colors";

export const CustomizedTimeline = () => {
  return (
    <Box id="el-dia" sx={{ margin: { xs: "1rem", sm: "2rem", md: "4rem" } }}>
      <Typography
        component="h3"
        variant="h3"
        gutterBottom
        fontFamily="Tinos, serif"
      >
        {content.timeline.heading}
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {content.timeline.ceremony.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <ChurchOutlinedIcon sx={{ fill: colors.white }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {content.timeline.ceremony.heading}
            </Typography>
            <Typography>{content.timeline.ceremony.subheading}</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {content.timeline.photos.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <CameraAltOutlinedIcon sx={{ fill: colors.white }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {content.timeline.photos.heading}
            </Typography>
            <Typography>{content.timeline.photos.subheading}</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {content.timeline.salon.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <FestivalOutlinedIcon sx={{ fill: colors.white }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {content.timeline.salon.heading}
            </Typography>
            <Typography>{content.timeline.salon.subheading}</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {content.timeline.food.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <FlatwareOutlinedIcon sx={{ fill: colors.white }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {content.timeline.food.heading}
            </Typography>
            <Typography>{content.timeline.food.subheading}</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {content.timeline.party.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <CelebrationOutlinedIcon sx={{ fill: colors.white }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {content.timeline.party.heading}
            </Typography>
            <Typography>{content.timeline.party.subheading}</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {content.timeline.leave.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <TimeToLeaveOutlinedIcon sx={{ fill: colors.white }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {content.timeline.leave.heading}
            </Typography>
            <Typography>{content.timeline.leave.subheading}</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
